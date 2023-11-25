import { AcordoColeta } from "./acordoColeta";
import { Descarte } from "./descarte";

export class DescarteMaterial {
  id : number;
  material_quantidade: number;
  material_status_coleta : number;
  material_status : number;
  material_preco : number;
  material_coleta_id : number;
  material_imposto : number;
  descarte_id : number;
  descarte : Descarte;
  acordo_coleta_id : number;
  acordo_coleta : AcordoColeta
}
