import type { ImagePosition } from "$lib/Models/Enums/Image-Position.Enum.Model";
import type { IndexOrder } from "$lib/Models/Enums/Index-Order.Enum.Model";
import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface ProductAttribute extends Database {
    title: string,
    description: string,
    image: string,
    index_order: IndexOrder,
    image_position: ImagePosition,
    deletedAt: Date | null
}