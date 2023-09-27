interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Project Manager', 'Stakeholder', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Task Management Kanban',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage team data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/23b020ac-9d48-4f2c-acf9-d285fd1b650f',
};
