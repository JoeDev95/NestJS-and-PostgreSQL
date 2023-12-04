import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, {
    message: 'O nome de usuário deve ter pelo menos 3 caracteres.',
  })
  @IsAlphanumeric(null, {
    message: 'O nome de usuário só permite caracteres alfanuméricos.',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Por favor, forneça um e-mail válido.' })
  email: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `A senha deve conter no mínimo 8 e no máximo 20 caracteres,
      pelo menos uma letra maiúscula,
      uma letra minúscula,
      um número e
      um character especial`,
  })
  password: string;
}
