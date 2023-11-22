package com.ggangdan.dto;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Generated
@ToString
public class PagingDTO {
	Integer currentPage;
	Integer totalCount;
	Integer endPage;
	Integer startPage;
	Integer middlePage;
	Integer nextPage;
	Integer prevPage;
}