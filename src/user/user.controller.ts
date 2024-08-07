import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interface/user.inteface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() user: CreateUserDto): string {
    this.userService.create(user);
    return 'success';
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }
}
