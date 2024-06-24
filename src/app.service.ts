import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  public async apiFindAll() {      
      try {
          const response = await firstValueFrom(
              this.httpService.get("https://rickandmortyapi.com/api/character")
          )
          return response.data;            
      } catch (error) {
          throw new BadRequestException();
      }
  }

  public async getAllDataApi() { 
    try {
        const response = await firstValueFrom(
            this.httpService.get("http://localhost:3002/test/getData")
        )
        return response.data;            
    } catch (error) {
        throw new BadRequestException();
    }
}
}
