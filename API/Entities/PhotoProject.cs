using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("PhotosProject")]
public class PhotoProject
{
    public int Id { get; set; }
    public string Url { get; set; }
    public bool IsMain { get; set; }
    public string PublicId { get; set; }

    public int ProjectId { get; set; }
    public Project Project { get; set; }
}