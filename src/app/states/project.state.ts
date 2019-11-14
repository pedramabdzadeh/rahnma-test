import {Project} from '../models/project';
import {DeliveryDetails} from '../models/delivery-details';

export interface ProjectState {
  projects: Project[];
  // deliveryDetails: DeliveryDetails[];
}

export const initialProjectState: ProjectState = {
  projects: null,
  // deliveryDetails: null
};
