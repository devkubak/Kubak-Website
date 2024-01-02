import type { ImagePosition } from "$lib/Models/Enums/Image-Position.Enum.Model";
import type { IndexOrder } from "$lib/Models/Enums/Index-Order.Enum.Model";
import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface ProductAttribute extends Database {
    image: string,
    index_order: string,
    image_position: string,
    deletedAt: Date | null
}