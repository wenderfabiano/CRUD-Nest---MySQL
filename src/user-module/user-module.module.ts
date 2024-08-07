import { Module } from '@nestjs/common';
import { NewUserController } from './controllers/new-user/new-user.controller';
import { FindUserController } from './controllers/find-user/find-user.controller';
import { FindAllUsersController } from './controllers/find-all-users/find-all-users.controller';
import { DeleteUserController } from './controllers/delete-user/delete-user.controller';
import { DeleteUserService } from './services/delete-user/delete-user.service';
import { NewUserService } from './services/new-user/new-user.service';
import { FindUserService } from './services/find-user/find-user.service';
import { FindAllUsersService } from './services/find-all-users/find-all-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './dataBase/entitys/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [
        NewUserController,
        FindUserController,
        FindAllUsersController,
        DeleteUserController
    ],
    providers: [
        DeleteUserService,
        NewUserService,
        FindUserService,
        FindAllUsersService
    ]
})
export class UserModuleModule { }
