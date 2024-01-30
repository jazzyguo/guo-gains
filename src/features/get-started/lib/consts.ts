import {
  getImperialHeightFromMetric,
  convertWeight,
} from "@/lib/utils/units-convert";

export const NUMBER_STEPS = 2;

export const BASE_HEIGHT_CM = 175;
export const BASE_WEIGHT_KG = 70;
export const [BASE_HEIGHT_FT, BASE_HEIGHT_INCHES] =
  getImperialHeightFromMetric(BASE_HEIGHT_CM);
export const BASE_WEIGHT_LBS = convertWeight(BASE_WEIGHT_KG, "metric");

export const BASE_URL = '/get-started'
