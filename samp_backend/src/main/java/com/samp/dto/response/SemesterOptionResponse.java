package com.samp.dto.response;

public class SemesterOptionResponse {

    private Long id;
    private String semesterName;

    public SemesterOptionResponse() {}

    public SemesterOptionResponse(Long id, String semesterName) {
        this.id = id;
        this.semesterName = semesterName;
    }

    public static SemesterOptionResponseBuilder builder() {
        return new SemesterOptionResponseBuilder();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSemesterName() {
        return semesterName;
    }

    public void setSemesterName(String semesterName) {
        this.semesterName = semesterName;
    }

    public static class SemesterOptionResponseBuilder {
        private Long id;
        private String semesterName;

        public SemesterOptionResponseBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public SemesterOptionResponseBuilder semesterName(String semesterName) {
            this.semesterName = semesterName;
            return this;
        }

        public SemesterOptionResponse build() {
            return new SemesterOptionResponse(id, semesterName);
        }
    }
}
