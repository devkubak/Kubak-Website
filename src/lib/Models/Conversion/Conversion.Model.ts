import type { CarouselDto } from '../DTO/Carousel.Dto.Model';
import type { DevelopmentDto } from '../DTO/Development.Dto.Model';
import type { ProjectDto } from '../DTO/Project.Dto.Model';
import type { Carousel } from '$lib/Models/Entities/Carousel.Entities.Model';
import type { Development } from '$lib/Models/Entities/Development.Entities.Model';
import type { Project } from '$lib/Models/Entities/Project.Entity.Model';
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
	  
}
