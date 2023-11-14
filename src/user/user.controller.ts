import { Body, Controller, Post, Get} from '@nestjs/common';
import { CreateuserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createuser(@Body() createuserDto: CreateuserDto) {
    console.log(createuserDto);
    const user = await this.userService.userCreate(createuserDto);
    return { user };
  }
  @Get()
  async getalluser() {
    return this.userService.getAllUsers();
} 
}
