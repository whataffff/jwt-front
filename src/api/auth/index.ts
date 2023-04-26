import { AxiosPromise } from "axios";
import React from "react"
import Endpoints from "../endpoints";
import { axiosInstance } from "./instanse";
import { ILogin, ILoginResponse } from "./types";

export const login = (params:ILogin) : AxiosPromise<ILoginResponse> => axiosInstance.post(Endpoints.AUTH.LOGIN,params)
//куда и какие параметры 











//запросы 