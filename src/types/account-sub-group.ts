export interface AccountSubGroupBase {
  accountGroupId: number;
  name: string;
  status: boolean;
}

export type AccountSubGroup = AccountSubGroupBase & { id: number };
