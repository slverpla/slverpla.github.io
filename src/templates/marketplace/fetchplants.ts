// utils/fetchPlants.ts
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import { db } from '@/utils/firebase';

import type { Plant } from './PlantCard';

interface FetchPlantsOptions {
  searchQuery?: string;
  category?: number;
  limitCount?: number;
}

export async function fetchPlantsFromFirestore({
  searchQuery,
  category,
  limitCount = 10,
}: FetchPlantsOptions): Promise<{
  plants: Plant[];
}> {
  const queryConstraints: any[] = [where('isListed', '==', true)];

  // 🔍 Search logic similar to Dart code
  if (searchQuery && searchQuery.trim() !== '') {
    let searchTerm = searchQuery.toLowerCase();
    if (searchTerm.length > 5) {
      searchTerm = searchTerm.substring(0, 5);
    }
    queryConstraints.push(where('searchIndex', 'array-contains', searchTerm));
  }

  // 🏷 Category filtering
  switch (category) {
    case 0: // Plants
      queryConstraints.push(where('tradeableType', '==', 'Plant'));
      break;
    case 1: // Seeds
      queryConstraints.push(where('tradeableType', '==', 'Seed'));
      break;
    case 2: // Produce
      queryConstraints.push(where('tradeableType', '==', 'Produce'));
      break;
    case 3: // Tools
      queryConstraints.push(where('tradeableType', '==', 'Tool'));
      break;
    case 4: // Grand Greens
      queryConstraints.push(where('size', 'in', ['Large', 'ExtraLarge']));
      break;
    case 5: // Sprouts
      queryConstraints.push(where('size', '==', 'Cutting'));
      break;
    case 6:
      queryConstraints.push(where('isIndoor', '==', 'No'));
      break;
    case 7:
      queryConstraints.push(where('isIndoor', '==', 'Yes'));
      break;
    case 8: // Penny Pincher
      queryConstraints.push(orderBy('price', 'asc'));
      break;
    case 9: // Low Light
      queryConstraints.push(where('sunExposure', '==', 'Shade'));
      break;
    case 10: // Casual Green Thumb
      queryConstraints.push(where('difficulty', '==', 'Easy'));
      break;
    // case 11: Surprise - No filter
    case 12: // Flower Fanatic
      queryConstraints.push(where('hasFlowers', '==', 'Yes'));
      break;
    case 13: // Pack & Send
      queryConstraints.push(where('canBeShipped', '==', true));
      break;
    default:
      break;
  }

  // 🕒 Default sort by created date
  queryConstraints.push(orderBy('listing.createdAt', 'desc'));
  queryConstraints.push(limit(limitCount));

  const q = query(collection(db, 'plants'), ...queryConstraints);
  const querySnapshot = await getDocs(q);

  const plants = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Plant[];

  return { plants };
}
