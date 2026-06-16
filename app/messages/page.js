import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';


/**
 * Incremental static Regeneration (ISR)
 */
// const revalidate = 5;
// const dynamic = "no-store"

export default async function MessagesPage() {
  /**
   * this two option used to cache and to not caching config using fetch method
   */
      // const response = await fetch('http://localhost:8080/messages', {
        // cache:'force-cache',
        // cache:'no-store',
    /**
     * now after initial load it wont request this api call for 5sec
     */
    // next:{
    //   revalidate:5
    // }
  // });
  /**
   * Here we are not using fetch instead local calling fuction which is connected to local Database
   * now reuest duplication will be there and data caching wont be there
   */
  const response = getMessages();
  /**
   * instead of constant reserved revalidat amd dynamic we can import from next/cache unstable_nostore
   */
  unstable_noStore();
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
