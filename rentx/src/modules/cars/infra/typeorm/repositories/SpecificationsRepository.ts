import { getRepository, Repository } from 'typeorm';

import {
    ICreateCategoryDTO,
    ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name,
        });
        return specification;
    }
}

export { SpecificationsRepository };
