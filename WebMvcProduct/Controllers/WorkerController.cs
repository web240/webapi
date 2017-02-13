using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMvcProduct.Models;

namespace WebMvcProduct.Controllers
{
    public class WorkerController : Controller
    {
        private CompanyDBContext db = new CompanyDBContext();
        // GET: Worker
        public ActionResult Index(string sortOrder,string searchString,string curretntFilter,int?page)
        {
            ViewBag.NameSortParm = String.IsNullOrEmpty(sortOrder) ? "desc" : "";
            ViewBag.CurrentSort = sortOrder;
            if (searchString != null)
            {
                page = 1;
            }
            else {
                searchString = curretntFilter;
            }
            ViewBag.CurrentFilter = searchString;

            var workers = from w in db.Workers
                          select w;
            if (!string.IsNullOrEmpty(searchString))
            {
                workers = workers.Where(w => w.Name.Contains(searchString));
            }
            switch (sortOrder)
            {
                case "desc":
                    workers = workers.OrderByDescending(w => w.Name);
                    break;
                default:
                    workers = workers.OrderBy(w => w.Name);
                    break;
            }
            int pageSize = 3;
            int pageNumber = (page ?? 1);
            return View(workers.ToPagedList(pageNumber,pageSize));
        }

        // GET: Worker/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Worker/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Worker/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Worker/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Worker/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Worker/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Worker/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
