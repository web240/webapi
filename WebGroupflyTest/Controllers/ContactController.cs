using GroupflyGroup.Platform.ObjectFramework;
using GroupflyGroup.Platform.ObjectFramework.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebGroupflyTest.Models;

namespace WebGroupflyTest.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List() {
            ObjektCollection<ContactModel> collections = new ObjektCollection<ContactModel>(Klass.ForId(ContactModel));
        }
    }
}