const mapping: Record<string, string> = {
  apartments: 'apartment',
  huntsearchers: 'huntsearcher',
  platforms: 'platform',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
