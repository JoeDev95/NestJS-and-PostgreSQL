import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Qualquer string passada no decorador controller será anexada à
 * URL da API. Para chamar qualquer API deste controlador, você precisa
 * adicionar o prefixo passado no decorador controller.
 * No nosso caso, nossa URL base é http://localhost:3000/user.
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * O decorador Post representa um método de requisição. Como usamos o
   * decorador post, o método desta API será do tipo post.
   * Portanto, a URL da API para criar um usuário será
   * POST http://localhost:3000/user.
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  /**
   * Usamos o decorador get para obter a lista de todos os usuários.
   * Portanto, a URL da API será
   * GET http://localhost:3000/user.
   */
  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  /**
   * Usamos o decorador get com um parâmetro de ID para obter o ID da requisição.
   * Portanto, a URL da API será
   * GET http://localhost:3000/user/:id.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.viewUser(+id);
  }

  /**
   * Usamos o decorador patch com um parâmetro de ID para obter o ID da requisição.
   * Portanto, a URL da API será
   * PATCH http://localhost:3000/user/:id.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  /**
   * Usamos o decorador delete com um parâmetro de ID para obter o ID da requisição.
   * Portanto, a URL da API será
   * DELETE http://localhost:3000/user/:id.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}
