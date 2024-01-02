import type { CarouselDto } from "$lib/Models/DTO/Carousel.Dto.Model";
import type { DevelopmentDto } from "$lib/Models/DTO/Development.Dto.Model";
import type { ProjectDto } from "$lib/Models/DTO/Project.Dto.Model";
import type { Carousel } from "$lib/Models/Entities/Carousel.Entities.Model";
import type { Development } from "$lib/Models/Entities/Development.Entities.Model";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import type { Technology } from "$lib/Models/Entities/Technology.Entity.Model";
import type { TechnologyDto } from "$lib/Models/DTO/Technology.Dto.Model";
import type { TechnologyAttributeDto } from "$lib/Models/DTO/TechnologyAttribute.Dto.Model";
import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";
import type { Footer } from "$lib/Models/Entities/Footer.Entity.Model";
import type { FooterDto } from "$lib/Models/DTO/Footer.DTO.Model";
import type { Product } from "$lib/Models/Entities/Product.Entity.Model";
import type { ProductDto } from "$lib/Models/DTO/Product.DTO.Model";
import type { ProductAttributeDto } from "$lib/Models/DTO/ProductAttribute.DTO.Model";
import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";
import type { AboutUs } from "$lib/Models/Entities/AboutUs.Entity.Model";
import type { AboutUsDto } from "$lib/Models/DTO/AboutUs.DTO.Model";
import { IndexOrder } from "../Enums/Index-Order.Enum.Model";
import { ImagePosition } from "../Enums/Image-Position.Enum.Model";
export class Dto {
  static ToCarouselDto(carousel: Carousel): CarouselDto | null {
    try {
      let dto: CarouselDto = {
        id: carousel.$id,
        title: {
          en: carousel.title as string,
          kr: carousel.title as string,
          ar: carousel.title as string,
        },
        video: carousel.video,
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToDevelopmentDto(development: Development): DevelopmentDto | null {
    try {
      let dto: DevelopmentDto = {
        id: development.$id,
        description: {
          en: development.description as string,
          kr: development.description as string,
          ar: development.description as string,
        },
        image: development.image,
        title: {
          en: development.title as string,
          kr: development.title as string,
          ar: development.title as string,
        },
       
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToProjectDto(project: Project): ProjectDto | null {
    try {
      let dto: ProjectDto = {
        id: project.$id,
        name: project.name as string,
        image: project.image,
        link: project.link as string,
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToTechnologyDto(technology: Technology): TechnologyDto | null {
    try {
      const technologyAttributes =
        technology.technologyAttributes.length > 0
          ? technology.technologyAttributes.map((technologyAttribute) => {
              return Dto.ToTechnologyAttributeDto(
                technologyAttribute
              ) as TechnologyAttributeDto;
            })
          : [];

      let dto: TechnologyDto = {
        id: technology.$id,
        title: {
          en: technology.title as string,
          kr: technology.title as string,
          ar: technology.title as string,
        },
        technologyAttributes: technologyAttributes,
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToTechnologyAttributeDto(
    technologyAttribute: TechnologyAttribute
  ): TechnologyAttributeDto | null {
    try {
      let dto: TechnologyAttributeDto = {
        id: technologyAttribute.$id,
        techId: technologyAttribute.techId as string,
        title: technologyAttribute.title as string,
        image: technologyAttribute.image,
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToProductDto(product: Product): ProductDto {
    try {
      return {
        id: product.$id,
        title: {
          en: product.title as string,
          kr: product.title as string,
          ar: product.title as string,
        },
    
        appLinksImage: {
          google: product.appLinkGoogleImage,
          apple: product.appLinkAppleImage,
        },
        productAttribute: product.productAttributes.map((productAttribute) => {
          return this.ToProductAttributeDto(
            productAttribute
          ) as ProductAttributeDto;
        })
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToProductAttributeDto(
    productAttribute: ProductAttribute
  ): ProductAttributeDto {
    try {
      return {
        id: productAttribute.$id,
        title: {
          en: productAttribute.title as string,
          kr: productAttribute.title as string,
          ar: productAttribute.title as string,
        },
        description: {
          en: productAttribute.description as string,
          kr: productAttribute.description as string,
          ar: productAttribute.description as string,
        },
        image: productAttribute.image,
        index_order: IndexOrder[productAttribute.index_order as keyof typeof IndexOrder],
        image_position: ImagePosition[productAttribute.image_position as keyof typeof ImagePosition],
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToFooterDto(footer: Footer): FooterDto {
    try {
      return {
        id: footer.$id,
        description: {
          en: footer.description as string,
          kr: footer.description as string,
          ar: footer.description as string,
        },
        image: footer.image,
        address1: {
          en: footer.address1 as string,
          kr: footer.address1 as string,
          ar: footer.address1 as string,
        },
        address2: {
          en: footer.address2 as string,
          kr: footer.address2 as string,
          ar: footer.address2 as string,
   
        }
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToAboutUsDto(aboutUs: AboutUs): AboutUsDto {
    try {
      return {
        id: aboutUs.$id,
        title: {
          en: aboutUs.title as string,
          kr: aboutUs.title as string,
          ar: aboutUs.title as string,
        },
        description: {
          en: aboutUs.description as string,
          kr: aboutUs.description as string,
          ar: aboutUs.description as string,
        },
        image: aboutUs.image
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
