import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from '/app.service'; // it doesn't work
// import { AppService } from '@/app.service'; // it works
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
