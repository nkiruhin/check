using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace check.Models
{
    public class Inspector
    {
        public string FullName { get; set; }
        public string Position { get; set; }
        public string InspectorTypeName { get; set; }
    }
    public class CheckEntity
    {
        public List<Inspector> Inspectors;
        public string ProviderOrganizationName { get; set; }
        public string INN { get; set; }
        public string OGRN { get; set; }
        public string ProsecutorsName { get; set; }
        public string StartDate { get; set; }
        public string Status { get; set; }
        public string TypeName { get; set; }
        public string OkatoName { get; set; }
        public string GoalOrganizationName { get; set; }
    }
}