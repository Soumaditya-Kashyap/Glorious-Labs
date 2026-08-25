// Route: /dashboard/workspace — Redirects to default workspace (mern-stack)
import { redirect } from 'next/navigation';

export default function WorkspaceRedirectRoute() {
  redirect('/dashboard/workspace/mern-stack');
}
