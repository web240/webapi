using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApi
{
    public class ContactsController:ApiController
    {
        static List<Contact> contacts;

        static ContactsController() {
            contacts = new List<Contact>();
            contacts.Add(new Contact { Id="001",Name="zhang san",PhoneNo="13720272617",EmailAddress="zhangsan@gmail.com",Address="wuhan"});
            contacts.Add(new Contact { Id="002",Name="li si",PhoneNo="13720272000",EmailAddress="lisi@gmail.com",Address="shanghai"});
        }

        public IEnumerable<Contact> Get(string id = null) {
            return from contact in contacts
                   where contact.Id == id || string.IsNullOrEmpty(id)
                   select contact;
        }

        public void Post(Contact contact) {
            //contact.Id = counter.ToString("D3");
            contacts.Add(contact);
        }

        public void Push(Contact contact) {
            contacts.Remove(contacts.First(c => c.Id == contact.Id));
            contacts.Add(contact);
        }

        public void Delete(string id) {
            contacts.Remove(contacts.First(c => c.Id == id));
        }
    }
}
