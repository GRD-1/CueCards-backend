import { Module } from '@nestjs/common';
import { UserModule } from '@/modules/user/user.module';
import { JwtModule } from '@/modules/jwt/jwt.module';
import { MailerModule } from '@/modules/mailer/mailer.module';
import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, JwtModule, MailerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
