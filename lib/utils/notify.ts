/* eslint no-new:0 */
export default function notify(title: string, body: string, details: Record<string, any> = {}) {
  console.log(`[Notification] ${title}: ${body}`);
  if (details.error) {
    console.error(details.error);
  }
  new Notification(title, {body});
}
