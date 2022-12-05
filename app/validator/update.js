module.exports.validateUpdate = function (employee) {
    if(employee.jobid < 0){
        return "Invalid Employee"
    }
    if (employee.jobName.length < 2) {
        return "Job Name is too short!"
    }
    if(employee.specSummary.length < 1){
        return "Spec Summary not sufficient"
    }
    if (employee.capabilityId > 15 || employee.capabilityId == 0) {
        return "Invalid Capability"
    }
    if(employee.bandLevelID > 10 || employee.bandLevelID == 0){
        return "Invalid Band Level"
    }
    if(employee.jobResponsibility.length < 1){
        return "Job Responsibilities too short"
    }
    return null
}