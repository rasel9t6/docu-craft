import Link from 'next/link';

const groupBy = (array, keyFn) => {
  return array.reduce((result, item) => {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

export default function SideBar({ docs = [] }) {
  // Ensure docs is not undefined or null
  if (!Array.isArray(docs)) {
    return null; // or render an error message
  }

  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className='lg:mt-10 lg:block'>
      <ul>
        <div>
          <div className='absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5'></div>
          <div className='absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5'></div>
          <div className='absolute left-2 h-6 w-px bg-emerald-500'></div>
          <ul
            role='list'
            className='border-l border-transparent'
          >
            {roots.map((rootNode) => (
              <li
                key={rootNode.id}
                className='relative'
              >
                <Link
                  aria-current='page'
                  className='flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white'
                  href={`/docs/${rootNode.id}`}
                >
                  <span className='truncate'>{rootNode.title}</span>
                </Link>
                <ul
                  role='list'
                  className='border-l border-transparent'
                >
                  {(nonRoots[rootNode.id] || []).map((childNode) => (
                    <li
                      key={childNode.id}
                      className='relative'
                    >
                      <Link
                        className='flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                        href={`/docs/${childNode.id}`}
                      >
                        <span className='truncate'>{childNode.title}</span>
                      </Link>
                      {nonRoots[childNode.id] && (
                        <ul
                          className='border-l border-transparent'
                          role='list'
                        >
                          {nonRoots[childNode.id].map((subRoot) => (
                            <li key={subRoot.id}>
                              <Link
                                className='flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white'
                                href={`/docs/${subRoot.id}`}
                              >
                                <span className='truncate'>
                                  {subRoot.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
}
