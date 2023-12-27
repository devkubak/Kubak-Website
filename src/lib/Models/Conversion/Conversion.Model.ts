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
export class Dto {
  static ToCarouselDto(carousel: Carousel): CarouselDto | null {
    try {
      let dto: CarouselDto = {
        id: carousel.$id,
        title: carousel.title as string,
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
        description: development.description as string,
        image: development.image,
        title: development.title as string,
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
        title: technology.title as string,
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
        title: product.title,
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
        title: productAttribute.title,
        description: productAttribute.description,
        image: productAttribute.image,
        index_order: productAttribute.index_order,
        image_position: productAttribute.image_position
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToFooterDto(footer: Footer): FooterDto {
    try {
      return {
        id: footer.$id,
        description: footer.description,
        image: footer.image,
        address1: footer.address1,
        address2: footer.address2
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToAboutUsDto(aboutUs: AboutUs): AboutUsDto {
    try {
      return {
        id: aboutUs.$id,
        title: aboutUs.title,
        description: aboutUs.description,
        image: aboutUs.image
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
