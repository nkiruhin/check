using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FindCheckController : ControllerBase
    {
        // GET: api/FindCheck
        [HttpGet]
        public IEnumerable<string> Get()
        {
            XDocument data = XDocument.Load("c:/checks/data.xml");
            string namespeces = "{"+data.Root.Name.NamespaceName+"}";
            var inspections = data.Root.Elements();
            string inn = "2310031475";
            var checks = inspections.Elements(namespeces + "I_SUBJECT")
                .Where(n => n.Attribute("INN")?.Value == inn)
                .Select(n => new
                {
                    START_DATE = n.Parent.Attribute("START_DATE")?.Value,
                    STATUS = n.Parent.Attribute("STATUS")?.Value,
                    PROSEC_NAME = n.Parent.Attribute("PROSEC_NAME")?.Value,
                    OKATO_NAME = n.Parent.Element(namespeces + "OKATO")?.Attribute("OKATO_NAME")?.Value,
                    ITYPE_NAME = n.Parent.Attribute("ITYPE_NAME")?.Value,
                    I_SUBJECT_ORG_NAME = n.Attribute("ORG_NAME")?.Value,
                    ISUPERVISION_NAME = n.Parent.Element(namespeces + "I_CLASSIFICATION")?.Attribute("ISUPERVISION_NAME")?.Value,
                    I_SUBJECT_INN = n.Attribute("INN").Value,
                    I_SUBJECT_OGRN = n.Attribute("OGRN")?.Value,
                    inspectors = n.Parent
                                .Elements(namespeces + "I_INSPECTOR")
                                .Select(v => new {
                                    full_name = v.Attribute("FULL_NAME").Value,
                                    position = v.Attribute("POSITION").Value
                                }).ToList()
                    
                }).ToList();

                //var inspections_ = checks.Select(n => new
                //{
                //    START_DATE = n.Attribute("START_DATE")?.Value,
                //    STATUS = n.Attributes().Where(x => x.Name.LocalName == "STATUS").FirstOrDefault()?.Value,
                //    PROSEC_NAME = n.Attributes().Where(x => x.Name.LocalName == "PROSEC_NAME").FirstOrDefault()?.Value,
                //    OKATO_NAME = n.Element(namespeces + "OKATO")?.Attributes().Where(x => x.Name.LocalName == "OKATO_NAME")?.FirstOrDefault().Value,
                //    I_SUBJECT_ORG_NAME = n.Element(namespeces + "I_SUBJECT")?.Attributes().Where(x => x.Name.LocalName == "ORG_NAME")?.FirstOrDefault().Value,
                //    I_SUBJECT_INN = n.Element(namespeces + "I_SUBJECT")?.Attributes().Where(x => x.Name.LocalName == "INN")?.FirstOrDefault().Value,
                //    I_SUBJECT_OGRN = n.Element(namespeces + "I_SUBJECT")?.Attributes().Where(x => x.Name.LocalName == "OGRN")?.FirstOrDefault().Value,
                //}).ToList();
            return new string[] { "value1", "value2" };
        }

        // GET: api/FindCheck/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FindCheck
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/FindCheck/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
