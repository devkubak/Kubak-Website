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
import type { LanguagesDto } from "$lib/Models/DTO/Languages.DTO.Model";
import type { Languages } from "$lib/Models/Entities/Languages.Entity.Model";
import { PrivaciesDto } from "../DTO/Privacies.DTO.Model";
import { PrivacyInformationDto } from "../DTO/PrivacyInformation.DTO.Model";
import { Privacies } from "../Entities/Privacies.Entity.Model";
import { PrivacyInformations } from "../Entities/PrivacyInformations.Entity.Model";
export class Dto {
  static ToCarouselDto(carousel: Carousel): CarouselDto | null {
    try {
      let dto: CarouselDto = {
        id: carousel.$id,
        title: {
          en: carousel.carouselLanguages.title_en as string,
          kr: carousel.carouselLanguages.title_kr as string,
          ar: carousel.carouselLanguages.title_ar as string,
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
          en: development.developmentLanguages.description_en as string,
          kr: development.developmentLanguages.description_kr as string,
          ar: development.developmentLanguages.description_ar as string,
        },
        image: development.image,
        title: {
          en: development.developmentLanguages.title_en as string,
          kr: development.developmentLanguages.title_kr as string,
          ar: development.developmentLanguages.title_ar as string,
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
        description: project.description as string,
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
                technologyAttribute,
              ) as TechnologyAttributeDto;
            })
          : [];

      let dto: TechnologyDto = {
        id: technology.$id,
        title: {
          en: technology.technologiesLanguages.title_en as string,
          kr: technology.technologiesLanguages.title_kr as string,
          ar: technology.technologiesLanguages.title_ar as string,
        },
        technologyAttributes: technologyAttributes,
      };

      return dto;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static ToTechnologyAttributeDto(
    technologyAttribute: TechnologyAttribute,
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
          en: product.productLanguages.title_en as string,
          kr: product.productLanguages.title_kr as string,
          ar: product.productLanguages.title_ar as string,
        },

        appLinksImage: {
          google: product.appLinkGoogleImage,
          apple: product.appLinkAppleImage,
        },
        productAttribute: product.productAttributes.map((productAttribute) => {
          return this.ToProductAttributeDto(
            productAttribute,
          ) as ProductAttributeDto;
        }),
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToProductAttributeDto(
    productAttribute: ProductAttribute,
  ): ProductAttributeDto {
    try {
      return {
        id: productAttribute.$id,
        title: {
          en: productAttribute.productAttributesLanguages.title_en as string,
          kr: productAttribute.productAttributesLanguages.title_kr as string,
          ar: productAttribute.productAttributesLanguages.title_ar as string,
        },
        description: {
          en: productAttribute.productAttributesLanguages
            .description_en as string,
          kr: productAttribute.productAttributesLanguages
            .description_kr as string,
          ar: productAttribute.productAttributesLanguages
            .description_ar as string,
        },
        image: productAttribute.image,
        index_order:
          IndexOrder[productAttribute.index_order as keyof typeof IndexOrder],
        image_position:
          ImagePosition[
            productAttribute.image_position as keyof typeof ImagePosition
          ],
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
          en: footer.footerLanguages.description_en as string,
          kr: footer.footerLanguages.description_kr as string,
          ar: footer.footerLanguages.description_ar as string,
        },
        image: footer.image,
        address1: {
          en: footer.footerLanguages.address1_en as string,
          kr: footer.footerLanguages.address1_kr as string,
          ar: footer.footerLanguages.address1_ar as string,
        },
        address2: {
          en: footer.footerLanguages.address2_en as string,
          kr: footer.footerLanguages.address2_kr as string,
          ar: footer.footerLanguages.address2_ar as string,
        },
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
          en: aboutUs.aboutUsLanguage.title_en as string,
          kr: aboutUs.aboutUsLanguage.title_kr as string,
          ar: aboutUs.aboutUsLanguage.title_ar as string,
        },
        description: {
          en: aboutUs.aboutUsLanguage.description_en as string,
          kr: aboutUs.aboutUsLanguage.description_kr as string,
          ar: aboutUs.aboutUsLanguage.description_ar as string,
        },
        image: aboutUs.image,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static ToLanguageDto(langauge: Languages): LanguagesDto {
    try {
      return {
        id: langauge.$id,
        title: langauge.title,
        abbreviation: langauge.abbreviation,
        active: langauge.active,
        createdAt: langauge.$createdAt as Date,
        updatedAt: langauge.$updatedAt as Date,
        deletedAt: null,
      };
    } catch (error) {
      throw error;
    }
  }
  static ToPrivacyDto(privacy: Privacies): PrivaciesDto {
    try {
      const data = {
        id: privacy.$id,
        name: privacy.name,
        lastUpdatedAt: privacy.lastUpdatedAt,
        informations: privacy.informations.map((info) => {
          return this.ToPrivacyInformationDto(info);
        }),
      };
      return data;
    } catch (error) {
      throw error;
    }
  }
  static ToPrivacyInformationDto(
    info: PrivacyInformations,
  ): PrivacyInformationDto {
    try {
      const data = {
        id: info.$id,
        title: info.title,
        description: info.description,
        privacyId: info.privacyId,
      };
      return data;
    } catch (error) {
      throw error;
    }
  }
}
