
let activities: any[] = [];

export function addActivity(activity: any) {
  const entry = {
    id: "ACT-" + Date.now(),
    ...activity,
    createdAt: new Date().toISOString()
  };
  activities.push(entry);
  return entry;
}

export function getActivities() {
  return activities;
}
