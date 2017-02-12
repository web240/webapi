using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Process();
            Console.Read();
        }
        private async static void Process() {
            //
            HttpClient httpClient = new HttpClient();
            HttpResponseMessage response = await httpClient.GetAsync("http://localhost/selft/api/contacts");
            IEnumerable<Contact> contacts = await response.Content.ReadAsAsync<IEnumerable<Contact>>();
            Console.WriteLine("local contacts");
            ListContacts(contacts);

            Contact contact = new Contact { Name = "wangwu", PhoneNo = "13797083246", EmailAddress = "wangwu@gmail.com" };
            await httpClient.PostAsJsonAsync<Contact>("http://localhost/selfhost/api/contacts",contact);
            Console.WriteLine("add wangwu");
            response = await httpClient.GetAsync("http://localhost/selfhost/api/contacts");
            contacts = await response.Content.ReadAsAsync<IEnumerable<Contact>>();
            ListContacts(contacts);

            //modify
            response = await httpClient.GetAsync("http://localhost/selfhost/api/contact/001");
            contact = (await response.Content.ReadAsAsync<IEnumerable<Contact>>()).First();
            contact.Name = "zhaoliu";
            contact.EmailAddress = "zhaoliu@gamil.com";
            await httpClient.PutAsJsonAsync<Contact>("http://localhost/selfhost/api/contacts/001",contact);
            Console.WriteLine("modify 001");
            response = await httpClient.GetAsync("http://localhost/selfthost/api/contacts");
            contacts = await response.Content.ReadAsAsync<IEnumerable<Contact>>();
            ListContacts(contacts);

            //delete
            await httpClient.DeleteAsync("http://localhost/selfhost/api/contacts/002");
            Console.WriteLine("delete 002");
            response = await httpClient.GetAsync("http://localhost/selfthost/api/contacts");
            contacts = await response.Content.ReadAsAsync<IEnumerable<Contact>>();
            ListContacts(contacts);
        }

        private static void ListContacts(IEnumerable<Contact> contacts) {
            foreach (Contact contact in contacts)
            {
                Console.WriteLine("{ 0,-6}{1,-6}{2,-20}{3,-10}",contact.Id,contact.Name,contact.EmailAddress,contact.PhoneNo);
            }
            Console.WriteLine();
        }
    }
}
