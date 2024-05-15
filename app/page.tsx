import { BusinessList } from '../components/BusinessList';

type BusinessesPageProps = {
  businesses: Business[];
};

export async function getServerData() {
  console.log('getServerData is being called');
  console.warn('getServerData is being called');
  try {
    const res = await fetch('http://localhost:3001/api/businesses');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const businesses = await res.json();
    console.warn('111', businesses);

    return {
      props: {
        businesses,
      },
    };
  } catch (error) {
    console.warn('Fetch failed:', error);
    // Handle error appropriately
    return {
      props: {
        businesses: [],
      },
    };
  }
}

export default function BusinessesPage({ businesses }: BusinessesPageProps) {
  return <>
    <h1>Businesses {businesses?.length}</h1>
  <BusinessList businesses={businesses} />
  
  </>
}