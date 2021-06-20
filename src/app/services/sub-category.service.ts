import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private _http:HttpClient) { }

  //load all subCategoriesOfCategory
  public subCategoriesOfCategory(categoryId){
    return this._http.get(`${baseUrl}/subCategory/category/${categoryId}`);
  }

  //get subcategory by Id
  public getSubcategoryById(subCatId){
    return this._http.get(`${baseUrl}/subCategory/${subCatId}`);
  }

  


}
