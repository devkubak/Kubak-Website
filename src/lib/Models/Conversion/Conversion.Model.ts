import type { CarouselDto } from "../DTO/Carousel.Dto.Model";
import type { DevelopmentDto } from "../DTO/Development.Dto.Model";
import type { ProjectDto } from "../DTO/Project.Dto.Model";
import type { Carousel } from "$lib/Models/Entities/Carousel.Entities.Model";
import type { Development } from "$lib/Models/Entities/Development.Entities.Model";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import type { Technology } from "../Entities/Technology.Entity.Model";
import type { TechnologyDto } from "../DTO/Technology.Dto.Model";
import type { TechnologyAttributeDto } from "../DTO/TechnologyAttribute.Dto.Model";
import type { TechnologyAttribute } from "../Entities/TechnologyAttribute.Entity.Model";
import type { Footer } from "../Entities/Footer.Entity.Model";
import type { FooterDto } from "../DTO/Footer.DTO.Model";
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
}
