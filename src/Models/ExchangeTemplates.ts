

type ExchangeTemplateModel ={
  title: string
  subtitle: string
  img:string
  btn:string

  resumeTitle:string,
  resumeDescription:string
  resumeImg:string

  pqTitile:string,
  pqs: BaseModel[],
  pqBtn: string

  aboutTitle: string
  aboutImg: string
  aboutItems: BaseModel[]
  aboutBtn: string

  utilsTitle: string
  utilsItems: BaseModel[]




};

type BaseModel ={
  title: string,
  subtitle: string
  img:string

}


export type {ExchangeTemplateModel , BaseModel}
