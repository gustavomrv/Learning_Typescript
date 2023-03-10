import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateCategoryDTO };
