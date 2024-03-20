using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface IProjectRepository
{
    Task<IEnumerable<Project>> GetProjectsAsync();

    Task<Project> GetProjectId(int id);

    Task<bool> SaveAllChangesAsync();

    void Update(Project project);
    Task<IEnumerable<ProjectSendDto>> GetProjectsDtoAsync();

    Task<ProjectSendDto> GetProjectDtoId(int id);
    Task<ProjectSendDto> GetProjectDtoTitle(string title);

    Task<bool> CreateProject(ProjectDto project);
}