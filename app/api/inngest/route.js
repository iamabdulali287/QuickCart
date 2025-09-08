import { serve } from "@/config/inngest"; 
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/config/inngest";

// Serve Inngest functions as API handlers
export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});
