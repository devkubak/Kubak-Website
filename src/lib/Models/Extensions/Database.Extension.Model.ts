export class Database {
  $id: string = null!;
  $createdAt: Date | string = null!;
  $updatedAt: Date | string = null!;
  $permissions: [] = [];
  $databaseId: string = null!;
  $collectionId: string = null!;
}
export class DatabaseAuth {
  $createdAt: string | Date = null!;
  $id: string = null!;
  $updatedAt: string | Date = null!;
}
