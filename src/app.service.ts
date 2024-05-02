import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): { title: string } {
    //funckja, która zwraca stringa
    return { title: "Hello World!" };
  }
}
