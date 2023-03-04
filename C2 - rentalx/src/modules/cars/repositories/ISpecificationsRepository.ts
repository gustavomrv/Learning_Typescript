import { Specification } from '../model/Specification';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateCategoryDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateCategoryDTO };
