import Link from 'next/link';

type Props = {
  businesses: Business[];
};

export function BusinessList({ businesses }: Props) {
  console.log('111', businesses);

  return (
    <ul>
      {!businesses && <p>No businesses found</p>}
      {businesses?.map((business) => (
        <li key={business.id}>
          <Link href={`/businesses/${business.id}`}>
            <a>{business.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}