
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from "cache-manager";

@Injectable()
export class CacheService {
  
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ){}

  async getCache<T>(
    key: string , 
    functionRequest: () => Promise<T>
    ):Promise<T>{
    // Cache
    const allDate:T = await this.cacheManager.get(key);

    if (allDate){
      return allDate;
    }

    const cities:T= await functionRequest();

    await this.cacheManager.set(key, cities);

    return cities;
  }
}
