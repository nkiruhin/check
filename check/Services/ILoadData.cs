using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace check.Services
{
    public interface ILoadData
    {
        XDocument GetDocument();
    }
    public class LoadData : ILoadData
    {
        private XDocument Document { set; get; }
        public LoadData()
        {
            Document = XDocument.Load("c:/checks/data.xml");
        }
        public XDocument GetDocument()
        {
            return Document;
        }
    }
}
