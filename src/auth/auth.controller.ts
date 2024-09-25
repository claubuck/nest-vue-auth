import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.authService.register(body.email, body.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // Protege la ruta de logout
  @Post('logout')
  async logout(@Request() req) {
    // En caso de que tengas que realizar alguna acción en el backend,
    // como registrar el logout en una base de datos, hazlo aquí.

    // Generalmente, no se necesita hacer nada en el backend para el logout con JWT,
    // ya que simplemente eliminamos el token en el cliente.
    return { message: 'Logout exitoso' };
  }
}
