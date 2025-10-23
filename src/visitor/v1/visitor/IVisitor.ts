import { Boleto } from "./transaction/Boleto";
import { Pix } from "./transaction/Pix";
import { Ted } from "./transaction/Ted";

export interface IVisitor {
    visitTed(candidate: Ted): number;
    visitPix(candidate: Pix): number;
    visitBoleto(candidate: Boleto): number;
}
